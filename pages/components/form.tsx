import { KeyboardEvent, useState } from 'react';
import { decode } from 'html-entities';


interface NewsProps {
    status: string;
    message: string;
    onValidated: Function
}

const NewsletterForm = ( { status, message, onValidated } : NewsProps) => {

  const [ error, setError ] = useState<String | null>(null);
  const [ email, setEmail ] = useState<String | null>(null);
  const [ name, setName ] = useState<String | null>(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError('Por favor, Ingresar un correo electrónico valido');
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email, FNAME: name });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event: KeyboardEvent<HTMLInputElement> ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.code === "13") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message: string) => {
    if ( !message ) {
     return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
     return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <>
      <div className="w-full max-w-md border border-black rounded-3xl self-center m-10 flex flex-col px-8 pt-6 pb-8 mb-4">
        <input
            onChange={(event) => setName(event?.target?.value ?? '')}
            type="text"
            placeholder="Nombre o Empresa"
            name="FNAME"    
            className="appearance-none placeholder-black w-full text-center border-black border-b py-2 px-3 mb-10 leading-tight focus:outline-none focus:shadow-outline"
            onKeyUp={(event) => handleInputKeyEvent(event)}
        /> 
        <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            name="EMAIL"
            placeholder="Correo electrónico"
            className="appearance-none w-full text-center placeholder-black border-black border-b py-2 px-3 mb-10 leading-tight focus:outline-none focus:shadow-outline"
            onKeyUp={(event) => handleInputKeyEvent(event)}
        />
        <div className="bg-break.away-blue rounded-3xl hover:bg-break.away-blue text-center text-white py-2 px-10 focus:outline-none focus:shadow-outline self-center">
          <button onClick={handleFormSubmit}>
            Enviar
          </button>
          
        </div>

        <div className="newsletter-form-info">
            {status === "sending" && <div>Sending...</div>}
            {status === "error" || error ? (
            <div
                className="newsletter-form-error"
                dangerouslySetInnerHTML={{ __html: error as string || getMessage( message ) as string }}
            />
            ) : null }
            {status === "success" && !error && (
            <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
            )}
        </div>
      </div>
     
    </>
  );
}

export default NewsletterForm