import axios from 'axios'

export default async function handler(req: any, res: any) {
  const { email, password, recaptchaToken } = req.body;

  // Validar reCAPTCHA
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;

  try {
    const recaptchaResponse = await axios.post(recaptchaUrl);
    const { success } = recaptchaResponse.data;

    if (!success) {
      return res.status(400).json({ message: 'reCAPTCHA inválido' });
    }

    // Si reCAPTCHA es válido, autenticar en Strapi
    const strapiLoginUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/local/register`;
    const strapiResponse = await axios.post(strapiLoginUrl, {
      identifier: email,
      password: password,
    });

    if (strapiResponse.data.jwt) {
      // Si el login es exitoso, puedes devolver el token JWT o redirigir
      return res.status(200).json({ success: true, jwt: strapiResponse.data.jwt });
    } else {
      return res.status(400).json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error en el login:', error);
    return res.status(500).json({ success: false, message: 'Error del servidor' });
  }
}
