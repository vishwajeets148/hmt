import Otp from "../models/Otp.js";
import dotenv from "dotenv";
import otpGenerator from "otp-generator";
import twilio from "twilio";
import { Op } from "sequelize";

dotenv.config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE;

const client = twilio(accountSid, authToken);

class otpController {
  static async sendOtp(req, res) {
    try {
      const { phone_number } = req.body;
      const otp = otpGenerator.generate(6, {
        digits: true,
        alphabets: false,
        upperCase: false,
        specialChars: false,
      });

      const cDate = new Date();

      const [otpRecord, created] = await Otp.findOrCreate({
        where: { phone_number },
        defaults: {
          generated_otp: otp, 
          otp_expiration: cDate,
        },
      });

      if (!created) {
        await Otp.update(
          { otp, otp_expiration: cDate },
          { where: { phone_number } }
        );
      }

      const message = await client.messages.create({
        body: `Your OTP for login is: ${otp}`,
        from: twilioPhoneNumber,
        to: "+91" + phone_number,
      });

      console.log("OTP sent successfully. SID:", message.sid);

      return res.status(200).json({
        success: true,
        message: "OTP sent successfully",
        msg: otp,
      });
    } catch (error) {
      console.error("Error sending OTP:", error);
      return res.status(400).json({ success: false, message: "Error sending OTP" });
    }
  }

  static async verifyOtp(req, res) {
    try {
      const { phone_number, generated_otp } = req.body;

      const otpData = await Otp.findOne({
        where: {
          phone_number,
          generated_otp,
          otp_expiration: { [Op.gt]: new Date() }, // Check if OTP is not expired
        },
      });

      if (otpData) {
        console.log("OTP verification successful:", otpData.toJSON());
        return res.status(200).json({
          success: true,
          message: "OTP Verified Successfully",
        });
      } else {
        console.log("OTP verification failed");
        return res.status(400).json({ success: false, message: "Wrong OTP" });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return res.status(400).json({ success: false, message: error.message });
    }
  }
}

export default otpController;
