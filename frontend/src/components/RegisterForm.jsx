import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-12 bg-black text-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Create an Account</h2>
        <form className="space-y-6">
          <Input type="text" placeholder="Full name" required  name = "fullname"className="py-4 text-base" />
          <Input type="email" placeholder="Email" required  name = "email" className="py-4 text-base" />
          <Input type="password" placeholder="Password" required name = "password" className="py-4 text-base" />
          <Button className="w-full bg-white text-black hover:bg-gray-400 py-4 text-lg" type="submit">
            Register
          </Button>
        </form>
        <p className="text-sm text-center mt-6">
          Already have an account? <a href="/login" className="underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
