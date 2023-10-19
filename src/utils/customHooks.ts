import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export const useVerifyUser = (user: string) => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const roleToLowerCase = role.toString().toLowerCase();
  if (roleToLowerCase !== user) {
    router.push("/login");
  }
};
