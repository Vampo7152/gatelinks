import { Request, Response } from "express";

import getTokens from "../../utils/getTokens";
import verifyAddress from "../../utils/verifyAddress";

const verifyTokenAuthority = async (req: Request, res: Response) => {
  const walletAddress = req.body.walletAddress;
  const mintAddress = req.body.mintAddress;
  const amount = req.body.amount;

  if (!(walletAddress || mintAddress || amount)) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  if (!verifyAddress(walletAddress)) {
    return res.status(400).json({
      message: "Invalid wallet address",
    });
  }

  if (await getTokens(walletAddress, mintAddress, amount)) {
    return res.status(200).json({
      message: "Authority verified",
    });
  }

  return res.status(400).json({
    message: "Authority not verified",
  });
};

export default verifyTokenAuthority;
