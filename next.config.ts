import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
    env: {
        DATABASE_URL: "postgresql://postgres:gcgxPBxNQGyiDgnLTOXQiuwNoxTlKtgl@mainline.proxy.rlwy.net:28900/railway"
        RESEND_API_KEY: "re_7KNo1UKB_BRGzNibk1vA154L815qHgnhf"
    },
}

export default nextConfig;
