describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('http://localhost:3000') // change URL to match your dev URL
    })
  })

  describe('Galerija', function() {
      it('Prikazuje preview galerije', function() {
        cy.visit('http://localhost:3000')

        cy.get('.galery').within(($galery) => {
            cy.get('.gallery-item').should(($galeryitem) => {
                const length = $galeryitem.length
                if (length >= 1) {
                    expect($galeryitem).to.have.length(length)
                } else {
                    throw new Error('Problem sa ucitavanjem slika u galeriji')
                }
            })
          })
      })
  })

 describe('Modal full size', function () {
     it('Otvara modal i prikazuje sliku', function() {
        cy.visit('http://localhost:3000')
        cy.get('.gallery-item')
            .first()
            .click()
            cy.get('.modal').should('be.visible').find('img')
     })
 })