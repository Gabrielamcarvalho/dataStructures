package array.ReverseString;


public class ReverseString {
    
    public static String reverseString(String str){

        String result = "";
        final int length = str.length();

        //adding the chars on the new string starting in the end
        for (int i = length - 1; i >= 0; i--){
            result+= str.charAt(i);
        }
        return result;
    }

    //Recommended way of doing it
    //Its gonna to to return a new string and reverse it
    public static String reverseStringBetter(String str){
        return new StringBuilder(str).reverse().toString();
    }

    public static void main (String[] args){

        String name = "Gabriela Melnik Carvalho";
        System.out.println(reverseString(name));
        System.out.println(reverseStringBetter(name));
    }
}
