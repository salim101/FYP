export class Answers {

    public quizID        : number = 0;
    public studentID     : string = '';
    public q1Answer      : number = 0;
    public q2Answer      : number = 0;
    public q3Answer      : number = 0;
    public q4Answer      : number = 0;
    public q5Answer      : number = 0;
    public dateAnswered  : string = '';
    private answeredTime : Object ;
    
	constructor() {}

	answers = (quizID       : number,
              studentID     : string,
              q1Answer      :  number,
              q2Answer      :  number,
              q3Answer      : number,
              q4Answer      :  number,
              q5Answer      : number,
              dateAnswered  : string,
              answeredTime  : Object
              ) => {
				this.quizID     = quizID;
                this.studentID  = studentID;
                this.q1Answer   = q1Answer;
                this.q2Answer   = q2Answer;
                this.q3Answer   = q3Answer;
                this.q4Answer   = q4Answer;
                this.q5Answer   = q5Answer;
                this.dateAnswered = dateAnswered;
                this.answeredTime = answeredTime;
			}
}