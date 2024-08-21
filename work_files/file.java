import java.io.File;
import java.io.FileOutputStream;

class file{
    public static void main(String[] args) {
        
            try{

        File file = new File("file.text");
        System.out.println(file.exists());
    }
    catch(Exception e){
        System.out.print(" file not found ");
    }
        FileOutputStream fout = new FileOutputStream(file);
        }
    }
