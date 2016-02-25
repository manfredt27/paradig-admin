(function(){
  describe('LoginCtrl', function(){
    var $this;
    var $state;
    var $controller;

    beforeEach(module('paradigAdmin.app'));
    beforeEach(module('paradigAdmin.login'));
  });

  

  it("Should be initialized", function() {
    //expect($this).toBeDefined();
    expect('a').toEqual('a');
  });

  xit("Should authenticate the user", function() {
    spyOn(userService, 'authenticate');
    $this.user = { username: 'admin', password: '123455678' };
    $this.authenticate();
  });
  
});