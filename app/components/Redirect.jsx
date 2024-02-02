"use client";
import { useRouter } from "next/navigation";

function Redirect({user}) {
  const router = useRouter();

   return router.push('/signin');
  

}

export default Redirect;
