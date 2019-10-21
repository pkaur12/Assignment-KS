package pageObject;

import java.util.HashSet;
import java.util.Set;

public class SentenceCheckPageObject {
	
	public static void getDifferences(String fir, String sec) {
	    String concatinatedString = fir+" "+sec;
	    concatinatedString = concatinatedString.toLowerCase();
	    
	    Set<String> uniqueWords = new HashSet<String>();
	    Set<String> dupWords = new HashSet<String>();
	    
	    String arr1[] = concatinatedString.split(" ");
	        

	    for (String d: arr1)
	        if (!uniqueWords.add(d))
	            dupWords.add(d);

	    uniqueWords.removeAll (dupWords);

	    System.out.println (">>>>>>>>>>>>>>>>>>>>Desired output from first set of statements:" + uniqueWords);
	     
	    }


}
