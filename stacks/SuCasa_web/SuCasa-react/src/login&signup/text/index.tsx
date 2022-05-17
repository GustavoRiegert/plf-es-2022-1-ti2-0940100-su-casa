import './styles.scss';

export function TextLoginAndSignUp() {
  return(
      <div className="overlay-container">
          <div className="overlay">
              <div className="overlay-panel overlay-right text-signup">
                  <h1>Hello, Friend!</h1>
                  <p>
                      SuCasa é uma paltaforma para facilitar sua vida seja atraves de uma renda extra alugando
                      espaços da sua casa para eventos ou atraves da facilidade de organizar uma festa. Cadastre-se
                      agora.

                  </p>
                  <button className="ghost" id="signUp">Sign Up</button>
              </div>
          </div>
      </div>
  )
}