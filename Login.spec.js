    it('Login', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://test.covalentnetworks.com/users/sign_in')
      cy.get('[name="user[email]"]').focus().type('fulladminslava@yopmail.com')
      cy.get('[name="user[password]"').focus().type('qwerty123')
      cy.get('button[class^="MuiButtonBase-root"]').click()
    })
        
    it('Navigate MAP -> Objectives', () => {
      cy.xpath('/html/body/div[2]/div[1]/header/div/div[2]/button[1]').click()
      cy.get('[href="/admins/supers/objectives"]').click()
    })
        
    it('Add new objective group', () => {
      cy.viewport(1920, 1080)
      cy.get('[class="btn waves-effect waves-green"]').click()
      cy.get('[name="name"]').focus().type('CO-1254')
      cy.get('[class="btn waves-effect waves-green modal-confirm"]').click()
    }) 

    it('Add new zone', () =>{
      cy.get('')
    })