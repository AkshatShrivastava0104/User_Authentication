// signup-form.tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Contexts/auth_context";
import "../styles/styles.css";

const Schema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(8).max(20),
});

const Signup: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(Schema),
    });
    const navigate = useNavigate();
    const { login } = useAuth();

    const onSubmit = async (data: any) => {
        // Create user object with both username and email
        const userData = {
            username: data.username,
            email: data.email
        };
        const token = "fake-token";
        login(userData, token);
        navigate("/home", { state: { fromSignup: true } });
    };

    return (
        <div id="root">
            <h1> Signup</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter your username" {...register("username")} required />
                {errors.username && <span>{errors.username.message}</span>}

                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Enter your email" {...register("email")} required />
                {errors.email && <span>{errors.email.message}</span>}

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" {...register("password")} required />
                {errors.password && <span>{errors.password.message}</span>}
                <p className="mt-2 text-center text-sm text-black">Already have an account?
                    <Link
                        to="/login"
                        className="inline font-medium text-blue-600 hover:text-blue-500"
                    >
                        Login
                    </Link>
                </p>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Signup;



