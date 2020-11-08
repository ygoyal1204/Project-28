class Launcher{
    constructor(body1, body2){
        var options ={
            bodyA: body1,
            pointB: body2,
            stiffness: 0.004,
            length: 10
        }
        this.bodyA= body1;
        this.pointB= body2;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA=body;
    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA= this.bodyA.position;
            var pointB= this.pointB;

            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}