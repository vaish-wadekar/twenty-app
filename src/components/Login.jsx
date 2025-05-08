import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

const Login = () => {

    const SITE_KEY = "6LfUuDArAAAAANq0mQNAH-ega_t7cuGUazgJ124Z"
    // const   navigate = useNavigate ();


    const [formData, setFormData] = useState({
        email: '',
        password: '',
        reCaptchaVerified: false
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleRecaptchaChange = (value) =>{
        // const isVerified = value ? true: false;
        const isVerified = !!value;
        setFormData({
            ...formData,
            reCaptchaVerified: isVerified
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.email != 'admin@gmail.com') return;
        if(formData.password != 'admin123') return;
        if(!formData.reCaptchaVerified) return;

        // Redirect User to the Dashboard
        alert('Login Successful')
    }

    return (
        <div className='flex justify-center bg-blue-400'>
            <form onSubmit={handleSubmit}>
                <h1 className="text-4xl text-center my-10">Login Form</h1>
                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="text-blue-400">Enter Email</label>
                    <input type="text" name="email" id="email" className="text-xl border-2 border-gray-300 rounded-lg p-1" onChange={handleChange} value={formData.email} />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="password" className="text-blue-400">Enter Password</label>
                    <input type="password" name="password" id="password" className="text-xl border-2 border-gray-300 rounded-lg p-1" onChange={handleChange} value={formData.password} />
                </div>
                <div className="mb-4">
                    <ReCAPTCHA sitekey={SITE_KEY} 
                    onChange={handleRecaptchaChange} />
                </div>
                <div className="flex justify-center mb-4">
                    <button type="submit" className='bg-blue-500 py-1 px-4'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login