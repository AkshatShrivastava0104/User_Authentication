import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate , Link} from "react-router-dom";

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


  const onSubmit = (data: any) => {
    // Create a user object from the form data
    const userData = {
      username: data.email.split('@')[0], // Simple username from email
      email: data.email
    };
    const token = "fake-token"; // In real app, this would come from your API
    login(userData, token);
    navigate("/home");
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
              create a new account
            </Link>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;