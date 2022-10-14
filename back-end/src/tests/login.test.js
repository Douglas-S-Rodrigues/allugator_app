const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

chai.should();


const app = require('../api/app');

describe("testes para rota login", () => {
  beforeEach(() => {
    sinon.restore();
  })

  it('deve testar se ao entrar na rota /login enviado o user recebe status 200', async () => {
    let user = { email: 'adm@app.com', password: '123456' };
    const response = await chai.request(app)
      .post('/login')
      .send(user);
    chai.expect(response).to.have.status(200);
  });
 
  
})

