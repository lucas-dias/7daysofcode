const apiKey = process.env.SENDGRID_API_KEY!
const to = process.env.SENDGRID_TO;
const from = process.env.SENDGRID_FROM;
const mail = require('@sendgrid/mail');


mail.setApiKey(apiKey);
export default async (req:any, res:any) => {
  const body = JSON.parse(req.body); 

  const msg = {
    to: `${to}`,
    from: `${from}`,
    subject: 'Testando o SendGrid',
    text: `Olá, ${body}. Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas. Até logo!`,
    html: `<p>Olá, ${body}. Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas. Até logo!</p>`,
  }

  await mail.send(msg)
    .then(() => {
      console.log(`E-mail enviado para ${body}`)
    })
    .catch((error: any) => {
      console.error(error)
    })

  res.status(200).json({ status: 'Ok' });
}