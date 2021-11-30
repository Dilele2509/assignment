# Giải thích code JS:

**Tổng quan**
* khi cho ảnh tank ban đầu có property là position mang giá trị relative và top left ban đầu đều là 0px (chỉnh trong file CSS). Lúc đó tọa độ left và top của hình (có thể xem như tọa độ x và y) đều có giá trị là 9 (in ra màn hình console để xem).
* Xét giới hạn border trong thẻ div được thiết lập (xem trong file CSS) là hình vuông có độ lớn các cạnh 190px. 
* Khi in tọa độ của tank ra console ta sẽ thấy tank có tọa độ (9,9) khi top và left bằng 0px. Từ đó suy ra tank là một hình vuông có độ lớn các cạnh là bằng 9.
* Tức là khi top/left tăng lên 10px thì tọa độ của tank sẽ tăng từ 9 thành 28 (tức là 19 đơn vị). Tương tự, ví dụ tank đang có tọa độ x là 47 khi left bằng 38px, để quay về tọa độ 28 ta phải giảm đi 19px (tức là left = 19px ).
* Từ đó suy ra để tank nằm hoàn toàn trong border thì tọa độ tối đa của tank là 180 và tối thiểu là 9, tương ứng với max top/left = 171px và min là 0px. (đối với boom cũng tương tự).

**Chi tiết**
* *khi di chuyển sang phía bên trái:* ta phải thay đổi giá trị của left giảm đi bằng cách lấy tọa độ x của tank trừ đi 28. Vì tọa độ (x,y) của tank và left/top luôn chênh lệch nhau 9 lần. VD: left= 0px -> x=9, left=19 -> x=28, left=38 -> x= 47.
* Nên nếu ta trừ đi 19 thay vì 28 thì tank chỉ di chuyển 10 đơn vị trong mỗi lần di chuyển thay vì 19. Điều này sẽ dẫn dến việc tank có thể đi ra khỏi border.Hay nói cách khác bởi vì sự chênh lệch 9 đơn vị nên nếu muốn left giảm đi 19px thì ta phải lấy (x - (19 + 9)). 
>tank.style.left = curPosition.left - 28 + "px";
* *khi di chuyển sang phía bên phải:* Khác với di chuyển sang trái, khi di chuyển sang phải thay vì cộng cho 28 thì ta lại phải cộng với 10. Lý do của sự khác biệt này là do chúng ta phải tính luôn cả phần kích thước của hình rồi tính toán giá trị cộng vào hợp lý để tank di chuyển đúng 19 đơn vị trong mỗi lần di chuyển. Cũng bởi sự chênh lệch 9 đơn vị nên nuốn di chuyển qua phải (tức là tăng left lên 19px), ta phải lấy (x + (19 - 9)).
* *Những điều này cũng xảy ra tương tự với di chuyển lên và xuống:* khi di chuyển đi lên ta thực hiện giống với di chuyển sang phải nhưng thay đổi giá trị top và left với nhau, và di chuyển xuống tương tự với di chuyển qua phải.
* *Đặt điều kiện di chuyển:* để tank không chạy ra ngoài border ta phải đặt điều kiện dựa trên các thông số min và max. VD:
>if(curPosition.left < 180)