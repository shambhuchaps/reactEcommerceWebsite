import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
   
  const {isAuthenticated, user} = useAuth0();

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.66280112276!2d84.10634197906049!3d27.63486847514988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994501640a2a5fb%3A0x7f856ddb96b2e143!2sThakaali%20Chok%2C%20Kawasoti%2033000!5e0!3m2!1sen!2snp!4v1677126916233!5m2!1sen!2snp" width="100%" height="400" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mgebkrdw" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" value={isAuthenticated ? user.name : ""} required autoComplete="off"/>
            <input type="email" name="Email" value={isAuthenticated ? user.email : ""} placeholder="Email" autoComplete="off" required />
            <textarea name="Message" cols="30" rows="10" autoComplete="off" placeholder="Enter your message" required ></textarea>
            <input type="submit" value="send"/>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact