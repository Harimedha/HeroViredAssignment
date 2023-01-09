#     You are given an array of dates in the format Dec 11 and a month in the format Dec as arguments. 
#     Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.

# Examples
# upload_count(["Sept 22", "Sept 21", "Oct 15"], "Sept") ➞ 2

# upload_count(["Sept 22", "Sept 21", "Oct 15"], "Oct") ➞ 1

    def findUploadCount(inputArray, month)

        months = Hash.new(0)

        for uploadDate in inputArray do
            # puts uploadDate
            datemonth = uploadDate.split(" ")
            uploadmonth = datemonth[0]
            # puts uploadmonth
            if months[uploadmonth]
                months[uploadmonth]+=1
            else
                months[uploadmonth]=1
            end          
        end

        puts "Number of video uploads for month of #{month} is #{months[month]}"
    end

findUploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")

