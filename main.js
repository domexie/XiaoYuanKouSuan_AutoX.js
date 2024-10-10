//Author：bilibili@domexie
//仅供学习交流，禁止售卖

auto.setMode("fast")
auto.waitFor()
toast("启动脚本")




function locate(bounds){
    var centerX=bounds.centerX()
    var centerY=bounds.centerY()
    p1=[centerX+100,centerY-50]
    p2=[centerX-100,centerY]
    p3=[centerX+100,centerY+50]
    p4=[centerX-100,centerY+50]
}

function smaller(){
    gesture(50,p1,p2,p3)
    sleep(200)
}

function bigger(){
    gesture(50,p2,p3,p4)
    sleep(200)
}


while (true) {
    sleep(50)
    var continueButton=text("继续").findOnce() || text("继续PK").findOnce() || text("再练一次").findOnce()
    if(continueButton){
        continueButton.click()
        sleep(300)
    }
    
    var questionMark=text("?").findOnce()
    if (questionMark){
        locate(questionMark.bounds())
        type=questionMark.indexInParent()
        parent=questionMark.parent()
        if (type==1){//小数比较
            if (!parent.child(0))
                continue
            num1=parseFloat(parent.child(0).text())
            num2=parseFloat(parent.child(2).text())
            if (num1<num2)
                smaller()
            else
                bigger()
        } else if(type==3){//分数比较
            if (!parent.child(0))
                continue
            numA1=parent.child(0).text()
            numA2=parent.child(1).text()
            numB1=parent.child(5).text()
            numB2=parent.child(6).text()
    
            numA=numA1/numA2
            numB=numB1/numB2
    
            if (numA<numB)
                smaller()
            else
                bigger()
        }
    }
    
}
