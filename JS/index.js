    /* Grab data from the input */

    const password = document.getElementById('password')

    password.addEventListener('input', () => {

      // Get the value of the input

      let value = password.value

      // Assignments for the rule container, container title, and container description.

      const el = document.getElementsByClassName('rule-container')

      const elTitle = document.getElementsByClassName('rule-container-title')

      const elDescirption = document.getElementsByClassName('rule-container-description')

      // Declarations for rules checks

      let ruleCounter

      let rule1Check = false

      let rule2Check = false

      let rule3Check = false

      let rule4Check = false

      let rule5Check = false

      let rule6Check = false

      let rule7Check = false

      let rule8Check = false

      let rule9Check = false

      let rule10Check = false

      let rule11Check = false

      let rule12Check = false
      
      // Declarations for the check verification process

      const rules = [ 
        {rule: () => rule1Check, index: 10},
        {rule: () => rule2Check, index: 9},
        {rule: () => rule3Check, index: 8},
        {rule: () => rule4Check, index: 7},
        {rule: () => rule5Check, index: 6},
        {rule: () => rule6Check, index: 5},
        {rule: () => rule7Check, index: 4},
        {rule: () => rule8Check, index: 3},
        {rule: () => rule9Check, index: 2},
        {rule: () => rule10Check, index: 1},
        {rule: () => rule11Check, index: 0},
        {rule: () => rule12Check, index: -1}
      ]

      let numberTotal = 0

      let number25

      let totalAtomicValue = 0

      // Change the visual function

      function changeColor (rule, method) {

        if(method) {

          // Change to green

          el[rule].style.borderColor = 'rgb(38, 123, 48)'

          elTitle[rule].style.backgroundColor = 'rgb(174, 243, 174)'

          elDescirption[rule].style.backgroundColor = 'rgb(227, 255, 227)'

        } else {

          // Change to red

          el[rule].style.borderColor = 'red'

          elTitle[rule].style.backgroundColor = 'rgb(255, 199, 199)'

          elDescirption[rule].style.backgroundColor = 'rgb(255, 236 , 236)'
        }

      }

      // Unhides the next rule only if all the previous rules are true

      function unHidesRule (variable) {

        let lastVariable

        for(let i = 0; i < rules.length; i++) {
          if(rules[i].rule()) {
            lastVariable = i
          } else {
            break
          }
        }

        const allTrue = rules

          .slice(0, variable)
          .every(ruleObj => ruleObj.rule())

        if(allTrue) {
          el[rules[lastVariable].index].style.display = 'block'
        } else {

        }
        
      }

      // Rules

      for(let i = 0; i < value.length; i++) {

        // 1º Rule Check

        if(value.length < 5) {

          el[11].style.display = 'block'

          changeColor(11, rule1Check)

        } else if (value.length >= 5) {

          rule1Check = true

          changeColor(11, rule1Check)

          unHidesRule(0)
        } 

        // 2º Rule

        if (value[i] >= 0 && value[i] < 10) {

          rule2Check = true

          changeColor(10, rule2Check)

          unHidesRule(1)
        } else {

          changeColor(10, rule2Check)
        }

        // 3º Rule
      
        if(value[i] >= 'A' && value[i] <= 'Z') {

          rule3Check = true

          changeColor(9, rule3Check)

          unHidesRule(2)
        } else {

          changeColor(9, rule3Check)
        }

        // 4º Rule

        if(value[i] >= ' ' && value[i] <= '/' || value[i] >= ':' && value[i] <= '@') {

          rule4Check = true

          changeColor(8, rule4Check)

          unHidesRule(3)
        } else {

          changeColor(8, rule4Check)
        }

        // 5º rule

        if (value[i] >= 0 && value[i] < 10) {
          
          numberTotal = numberTotal + Number(value[i])
        }

        if(numberTotal == 25) {

          rule5Check = true

          number25 = true

          changeColor(7, number25)

          unHidesRule(4)
        } else if(numberTotal < 25 || numberTotal > 25) {

          number25 = false

          rule5Check = false

          changeColor(7, number25)

        }

        // 6º Rule

        const months = ['january', 'march', 'april', 'may', 'june', 'july', 'august', 'october', 'november', 'december']

        // The first if statement makes the word ‘February’ unusable, and displays an alert message if it is used

        if(value.includes('february') || value.includes('February') || value.includes('FEBRUARY')) {

          let errorMessage = document.getElementsByClassName('error-message')
          errorMessage[0].style.top = '0'

        } else {

          // Check for a month in the password

          for(let a = 0; a < months.length; a++) {

            if(value.includes(months[a])) {
              
              rule6Check = true
              
              changeColor(6, rule6Check)

              unHidesRule(5)
            } else {

              changeColor(6, rule6Check)
            }
          } 
        }

        // 7º Rule

        const romanNumbers = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
      
        for(let b = 0; b < romanNumbers.length; b++) {

          if(value.includes(romanNumbers[b])) {

            rule7Check = true

            changeColor(5, rule7Check)

            unHidesRule(6)
          } else {

            changeColor(5, rule7Check)
          }
        }

        // 8º Rule

        const romanNumber35 = ['XXXV', 'V', 'VII']

        for(let z = 0; z < romanNumber35.length; z++) {

          if(value.includes(romanNumber35[0]) || value.includes(romanNumber35[1]) && value.includes(romanNumber35[2]) ) {

            rule8Check = true

            changeColor(4, rule8Check)

            unHidesRule(7)

          } else {

            changeColor(4, rule8Check)
          }
        }

        // 9º Rule Checker

        // Elements with two-letter symbols in the periodic table.

        const symbolsWith2Letters = [
    { symbol: "He", number: 2 },  { symbol: "Li", number: 3 },  { symbol: "Be", number: 4 },
    { symbol: "Ne", number: 10 }, { symbol: "Na", number: 11 }, { symbol: "Mg", number: 12 },
    { symbol: "Al", number: 13 }, { symbol: "Si", number: 14 }, { symbol: "Cl", number: 17 },
    { symbol: "Ar", number: 18 }, { symbol: "Ca", number: 20 }, { symbol: "Sc", number: 21 },
    { symbol: "Ti", number: 22 }, { symbol: "Cr", number: 24 }, { symbol: "Mn", number: 25 },
    { symbol: "Fe", number: 26 }, { symbol: "Co", number: 27 }, { symbol: "Ni", number: 28 },
    { symbol: "Cu", number: 29 }, { symbol: "Zn", number: 30 }, { symbol: "Ga", number: 31 },
    { symbol: "Ge", number: 32 }, { symbol: "As", number: 33 }, { symbol: "Se", number: 34 },
    { symbol: "Br", number: 35 }, { symbol: "Kr", number: 36 }, { symbol: "Rb", number: 37 },
    { symbol: "Sr", number: 38 }, { symbol: "Zr", number: 40 }, { symbol: "Nb", number: 41 },
    { symbol: "Mo", number: 42 }, { symbol: "Tc", number: 43 }, { symbol: "Ru", number: 44 },
    { symbol: "Rh", number: 45 }, { symbol: "Pd", number: 46 }, { symbol: "Ag", number: 47 },
    { symbol: "Cd", number: 48 }, { symbol: "In", number: 49 }, { symbol: "Sn", number: 50 },
    { symbol: "Sb", number: 51 }, { symbol: "Te", number: 52 }, { symbol: "Xe", number: 54 },
    { symbol: "Cs", number: 55 }, { symbol: "Ba", number: 56 }, { symbol: "La", number: 57 },
    { symbol: "Ce", number: 58 }, { symbol: "Pr", number: 59 }, { symbol: "Nd", number: 60 },
    { symbol: "Pm", number: 61 }, { symbol: "Sm", number: 62 }, { symbol: "Eu", number: 63 },
    { symbol: "Gd", number: 64 }, { symbol: "Tb", number: 65 }, { symbol: "Dy", number: 66 },
    { symbol: "Ho", number: 67 }, { symbol: "Er", number: 68 }, { symbol: "Tm", number: 69 },
    { symbol: "Yb", number: 70 }, { symbol: "Lu", number: 71 }, { symbol: "Hf", number: 72 },
    { symbol: "Ta", number: 73 }, { symbol: "Re", number: 75 }, { symbol: "Os", number: 76 },
    { symbol: "Ir", number: 77 }, { symbol: "Pt", number: 78 }, { symbol: "Au", number: 79 },
    { symbol: "Hg", number: 80 }, { symbol: "Tl", number: 81 }, { symbol: "Pb", number: 82 },
    { symbol: "Bi", number: 83 }, { symbol: "Po", number: 84 }, { symbol: "At", number: 85 },
    { symbol: "Rn", number: 86 }, { symbol: "Fr", number: 87 }, { symbol: "Ra", number: 88 },
    { symbol: "Ac", number: 89 }, { symbol: "Th", number: 90 }, { symbol: "Pa", number: 91 },
    { symbol: "Np", number: 93 }, { symbol: "Pu", number: 94 }, { symbol: "Am", number: 95 },
    { symbol: "Cm", number: 96 }, { symbol: "Bk", number: 97 }, { symbol: "Cf", number: 98 },
    { symbol: "Es", number: 99 }, { symbol: "Fm", number: 100 }, { symbol: "Md", number: 101 },
    { symbol: "No", number: 102 }, { symbol: "Lr", number: 103 }, { symbol: "Rf", number: 104 },
    { symbol: "Db", number: 105 }, { symbol: "Sg", number: 106 }, { symbol: "Bh", number: 107 },
    { symbol: "Hs", number: 108 }, { symbol: "Mt", number: 109 }, { symbol: "Ds", number: 110 },
    { symbol: "Rg", number: 111 }, { symbol: "Cn", number: 112 }, { symbol: "Nh", number: 113 },
    { symbol: "Fl", number: 114 }, { symbol: "Mc", number: 115 }, { symbol: "Lv", number: 116 },
    { symbol: "Ts", number: 117 }, { symbol: "Og", number: 118 }
        ]

        for(let c = 0; c < symbolsWith2Letters.length; c++) {

          if(value.includes(symbolsWith2Letters[c].symbol)) {

            rule9Check = true

            changeColor(3, rule9Check)

            unHidesRule(8)

            // 12º Rule Checker 1º Part

            totalAtomicValue = totalAtomicValue + symbolsWith2Letters[c].number

          } else {

            changeColor(3, rule9Check)
          }
        }

        // 10º Rule Checker

        const years = value.match(/\d{4}/g) || []

        for(let d = 0; d < years.length; d++) {

          if(years[d] % 4 == 0) {

            rule10Check = true

            changeColor(2, rule10Check)

            unHidesRule(9)
          } else {

            changeColor(2, rule10Check)
          }
        }

        // 11º Rule

        if(value.includes('🥚')) {

          rule11Check = true

          changeColor(1, rule11Check)

          unHidesRule(10)

        } else {

          changeColor(1, rule11Check)
        }

        // 12º Rule Checker 2º Part

        if(totalAtomicValue == 200) {

          rule12Check = true

          changeColor(0, rule12Check)
        } else {

          changeColor(0, rule12Check)
        }

      }

      // To run tests (e.g., to check if all rules evaluate to true
      // Use this to check whether a rule is true before it is supposed to)...

      // console.log(rule1Check)
      // console.log(rule2Check)
      // console.log(rule3Check)
      // console.log(rule4Check)
      // console.log(rule5Check)
      // console.log(rule6Check)
      // console.log(rule7Check)
      // console.log(rule8Check)
      // console.log(rule9Check)
      // console.log(rule10Check)
      // console.log(rule11Check)
      // console.log(rule12Check)
            

    // Checks if all rules are being followed; if so, displays the accept message.

      if(rule1Check && rule2Check && rule3Check && rule4Check && rule5Check && rule6Check && rule7Check && rule8Check && rule9Check && rule10Check && rule11Check && rule12Check) {
        
        let acceptMessage = document.getElementsByClassName('accept-message')
        acceptMessage[0].style.top = '0'
      }
    })

    // Function to close, on click, either the accept message or the February alert message.

    function messagesEvent() {

      addEventListener('click', () => {

        const element = document.getElementsByClassName('error-message')

        element[0].style.top = '999vh'

        const element2 = document.getElementsByClassName('accept-message')

        element2[0].style.top = '999vh'
      })
    } 

