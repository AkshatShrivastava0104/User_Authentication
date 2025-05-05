import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";

import "../styles/styles.css";
import { useAuth } from "../Contexts/auth_context";


import "../styles/styles.css";

const Schema = z.object({
  email: z.string().email(),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
});

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(Schema),
  });

  const navigate = useNavigate();
  const { login } = useAuth();


  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
  
      const resData = await res.json();
  
      if (res.ok) {
        const userData = {
          username: data.email.split('@')[0],
          email: data.email,
        };
        const token = resData.token;
        login(userData, token);
        navigate("/home");
      } else {
        alert(resData.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong!");
    }
  };
  

  return (
    <div id="root">
      <h1> Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          {...register("email")}
          required
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Enter Password"
          {...register("password")}
          required
        />
        {errors.password && <span>{errors.password.message}</span>}

        <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
          Create a New Account
        </Link>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;