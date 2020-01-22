#include <iostream>
using namespace std;

class Person {

    string name;
    public:
    int age;
    Person(string name, int age){
        this->name = name;

        if(age < 18 ) {
            this->age = this->getDefaultAge();
        }
        else {
            this->age = age;
        }

    }
    int getDefaultAge () {
        return 18;
    }

};

class Student : public Person {

    int grade;
    public:
    Student(string name, int age, int grade): Person(name,age){
        this->grade = grade;
    }
    int getDefaultAge () {
        return 13;
    }
};

int main () {

    Student *s = new Student("Sahil",17,8);
    cout<<s->age;
    return 0;
}