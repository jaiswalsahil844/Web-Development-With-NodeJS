class Person {

    String name;
    public int age;
    public Person(String name, int age){
        this.name = name;

        if(age < 18 ) {
            this.age = this.getDefaultAge();
        }
        else {
            this.age = age;
        }

    }
    public int getDefaultAge () {
        return 18;
    }

}

class Student extends Person {

    int grade;
    public Student(String name, int age, int grade){
        super(name,age);
        this.grade = grade;
    }
    public int getDefaultAge () {
        return 13;
    }
}

public class b {
    public static void main(String args[]) {
        Student s = new Student("Sahil",17,8);
        System.out.println(s.age);
    }
}
