import {expect} from 'chai';
//import  jsdom from 'jsdom';
//import fs from 'fs';

describe('our first test' ,() => {
  it('should pass', () =>{
    expect(true).to.equal(true);

  })
});

/*describe('index.html' , () => {
  it('should say Business Casual' , (done) => {

    const index = fs.readFileSync('./src/index.html' , "UTF-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsById('h1idfortest');
      expect(h1.innerHTML).to.equal("Business Casual");
      done();
      window.close();

    })
  })
})
*/
