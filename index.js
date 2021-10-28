
  //get random number
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) +
    min); //The maximum is exclusive and the minimum is inclusive
}

//wait
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const main = async () => {
    //initialize 
    let i = 0
    let personalContainer
    let teacherAvator = ['ASH', 'AWH', 'CCK', 'CHCH', 'CK',
     'CKK', 'CKW', 'CLC', 'CLY', 'CMW', 'DL', 'FCH', 'FFC',
      'FKM', 'HCS', 'HLY', 'HWL', 'KSL', 'KSM', 'KYF', 'LCF',
       'LCH', 'LCHO', 'LCP', 'LCTU', 'LH', 'LHY', 'LKY', 'LPS',
        'LPT', 'LSC', 'LSK', 'LSP', 'LSY', 'LWF', 'MHS', 'MLM',
         'NHH', 'NKK', 'NSW', 'NWYI', 'NYK', 'NYY', 'OCW 1', 'OCW 2',
          'PWY', 'SKL', 'SPM', 'SWY', 'SYF', 'TCY', 'TSY', 'TSYI',
           'WCS', 'WKM', 'WMS', 'WPH2', 'WWKI', 'WYM', 'YKY', 'YWY']

    while (true) {
        let randomSec = getRandomInt(5, 30)
        console.log(`Wait ${randomSec} secs`)
        await sleep(randomSec * 1000)

        //pick random avator
        let randomAvatorIndex = getRandomInt(0, teacherAvator.length - 1)

        //pick random gif
        randomSec = getRandomInt(1, 31)
        let avatorFileIndex = String(('00' + randomSec).slice(-3))


        switch (i) {
            case 0:
                personalContainer = document.querySelector('#first')
                break
            case 1:
                personalContainer = document.querySelector('#second')
                break
            case 2:
                personalContainer = document.querySelector('#third')
                break
            case 3:
                personalContainer = document.querySelector('#fourth')
                break
            case 4:
                personalContainer = document.querySelector('#fifth')
                break
        }

        let headChildNode = personalContainer.querySelector('.head')
        let bodyChildNode = personalContainer.querySelector('.body')

        console.log("avator/"+ teacherAvator[randomAvatorIndex] +".png")

        headChildNode.width = 150
        headChildNode.height = 150

        bodyChildNode.width = 150
        bodyChildNode.height = 150

        headChildNode.src = "avator/"+ teacherAvator[randomAvatorIndex ] +".png"
        bodyChildNode.src = "gif/" + avatorFileIndex + ".gif"



i++

        if (i == 4) {
            i = 0
        }
    }


}

main()