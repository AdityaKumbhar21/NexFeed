import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl p-10 bg-black text-white rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">Login to your Account</h2>
        <form className="space-y-6">
          <Input type="email" placeholder="Email" required  name = "email" className="py-3 text-base" />
          <Input type="password" placeholder="Password" required  name = "password" className="py-3 text-base" />
          <Button className="w-full bg-white text-black hover:bg-gray-400 py-3 text-base" type="submit">
            Login
          </Button>
        </form>
        <p className="text-sm text-center mt-6">
          Don't have an account? <a href="/register" className="underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
