import Image from 'next/image';
import Link from 'next/link';

function SignUp() {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex-[1.4] bg-slate-100">
        <nav className="h-[4.3rem] flex items-center px-5 ">
          <Image
            height={190}
            width={180}
            alt="logo image error"
            src="/dark-logo.svg"
          />
        </nav>
        <div>
          <Image
            src="/login-bg.svg"
            height={500}
            width={500}
            className="mx-auto mt-5"
            alt="login bg error"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center min-h-screen justify-center">
        <div className="flex flex-col w-[480px] space-y-5  justify-center p-8 rounded-md">
          <div className="space-y-2">
            <h1 className="font-bold text-2xl">Welcome to Modernize</h1>
            <p className="text-gray-800">Your admin dashboard</p>
          </div>
          <div className="flex items-center text-sm justify-center gap-3">
            <button className="px-5 py-2 space-x-2 hover:bg-slate-100 transition-colors  rounded-md border border-slate-300 flex items-center justify-center">
              <Image
                width={16}
                height={16}
                src="/google-icon.svg"
                alt="google-cion error"
              />
              <span>Sign up with Google</span>
            </button>
            <button className="px-5 py-2 space-x-2 hover:bg-slate-100 transition-colors  rounded-md border border-slate-300 flex items-center justify-center">
              <div className="relative h-6 w-6">
                <Image
                  // width={20}
                  // height={20}
                  className="absolute"
                  fill
                  src="/facebook-icon.svg"
                  alt="google-cion error"
                />
              </div>
              <span>Sign up with FB</span>
            </button>
          </div>
          <div className="flex items-center text-sm">
            <div className="flex-1 border-b"></div>
            <div className="flex-0 px-2">Or Sign up with</div>
            <div className="flex-1 border-b"></div>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="font-semibold text-slate-800" htmlFor="name">
                Username
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-slate-300 outline-blue-500 rounded-md p-2 "
              />
            </div>
            <div className="space-y-1">
              <label className="font-semibold text-slate-800" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-slate-300 outline-blue-500 rounded-md p-2 "
              />
            </div>
            <div className="space-y-1">
              <label
                className="font-semibold text-slate-800"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full border border-slate-300 outline-blue-500 rounded-md p-2 "
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Remember this device</p>
            </div>
            <Link href="/" className="text-blue-500">
              Forgot password?
            </Link>
          </div>
          <div>
            <button className="bg-blue-400 hover:bg-blue-500 transition-colors text-white w-full py-[10px] rounded-md">
              {' '}
              Sign Up
            </button>
          </div>
          <div className="gap-3 flex items-center">
            <p>Already have an account?</p>
            <Link href="/signIn" className="text-blue-500">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
