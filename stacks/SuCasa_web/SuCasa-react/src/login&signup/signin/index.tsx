export function Login() {
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 bg-white text-dark pt-5 pb-3">
                    <img src="" alt="LOGO DO SU CASA"/>
                    <h1>Acesse sua conta</h1>

                    <form id="form" className="d-flex flex-column text-start">
                        <div className="mb-3">
                            <label htmlFor="form-floating-email" className="form-label">E-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="nome@email.com"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="form-floating-password" className="form-label">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="********"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="align-self-center px-4 mb-3 btn btn-secondary rounded-pill"
                        >
                            Entrar
                        </button>
                    </form>

                    <div>
                        Não tem uma conta?
                        <a href="cadastro.html" className="text-decoration-none text-info">Cadastre-se</a>
                    </div>
                </div>
            </div>
        </div>
    )
}