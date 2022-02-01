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
      <div id="subscribe" className="md:w-full max-w-md border border-black rounded-3xl self-center m-10 flex flex-col px-8 pt-6 mb-4">
        <input
            onChange={(event) => setName(event?.target?.value ?? '')}
            type="text"
            placeholder="Nombre o Empresa"
            name="FNAME"    
            className="medium-font appearance-none placeholder-black w-full text-center border-black border-b py-2 px-3 mb-10 leading-tight focus:outline-none focus:shadow-outline"
            onKeyUp={(event) => handleInputKeyEvent(event)}
        /> 
        <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            name="EMAIL"
            placeholder="Correo electrónico"
            className="medium-font appearance-none w-full text-center placeholder-black border-black border-b py-2 px-3 mb-10 leading-tight focus:outline-none focus:shadow-outline"
            onKeyUp={(event) => handleInputKeyEvent(event)}
        />
       
        <button className="medium-font bg-break.away-blue rounded-3xl hover:bg-break.away-blue text-center text-white py-1 px-8 focus:outline-none focus:shadow-outline self-center" onClick={handleFormSubmit}>
          Enviar
        </button>
          
        <div className="medium-font pt-5">
            {status === "sending" && <div className="text-break.away-blue text-center">Enviando...</div>}
            {status === "error" || error ? (
            <div
                className="text-red-700 text-center pb-5"
                dangerouslySetInnerHTML={{ __html: error as string || getMessage( message ) as string }}
            />
            ) : null }
            {status === "success" && !error && (
            <div 
              className="text-break.away-blue text-center pb-5"
              dangerouslySetInnerHTML={{ __html: decode(message) }} />
            )}
        </div>
      </div>
     
    </>
  );
}

export default NewsletterForm