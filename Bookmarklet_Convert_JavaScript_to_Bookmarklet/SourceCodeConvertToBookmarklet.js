/**

 * Mã JavaScript gốc của Bookmarklet chuyển đổi.

 * Chức năng: Nhận mã JS thô, nén, mã hóa URL, thêm tiền tố 'javascript:' 

 * và hiển thị kết quả để người dùng sao chép.

 */


(function() {

    /**

     * Hàm nén (minify) mã JavaScript: loại bỏ comment, xuống dòng, và khoảng trắng thừa

     * xung quanh các ký tự đặc biệt.

     * @param {string} rawCode - Mã JavaScript thô.

     * @returns {string} Mã JavaScript đã được nén.

     */

    function minifyCode(rawCode) {

        let minified = rawCode;

        

        // 1. Loại bỏ comment dòng và comment khối (multiline)

        minified = minified.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1'); 

        

        // 2. Thay thế tất cả các ký tự xuống dòng và tab bằng một khoảng trắng đơn

        minified = minified.replace(/[\n\t]/g, ' '); 

        

        // 3. Loại bỏ khoảng trắng xung quanh các ký tự thường gặp như dấu ngoặc, dấu chấm phẩy, toán tử

        minified = minified.replace(/ ?([{}();=:,!+\-&|^?]) ?/g, '$1');

        

        // 4. Loại bỏ khoảng trắng ở đầu và cuối chuỗi

        minified = minified.trim();


        return minified;

    }


    // Yêu cầu người dùng nhập mã JavaScript thô

    const rawInput = prompt(

        "Dán (paste) mã JavaScript bạn muốn chuyển đổi vào đây (Ví dụ: alert('Hi!')):", 

        "(function(){ /* Dán code của bạn */ })();"

    );


    // Dừng nếu người dùng hủy bỏ (Cancel)

    if (!rawInput) {

        return;

    }


    // Tiến hành nén, mã hóa và định dạng

    const minifiedCode = minifyCode(rawInput);

    const encodedCode = encodeURIComponent(minifiedCode);

    const finalBookmarklet = 'javascript:' + encodedCode;


    // Hiển thị kết quả Bookmarklet đã hoàn chỉnh trong hộp thoại thứ hai

    prompt(

        "✅ Bookmarklet đã chuyển đổi. Sao chép toàn bộ nội dung sau (Ctrl+C):", 

        finalBookmarklet

    );


    // Thông báo cho người dùng về việc sao chép thủ công

    alert("Mã Bookmarklet đã được tạo và hiển thị trong hộp thoại (prompt) thứ hai. Vui lòng sao chép thủ công (Ctrl+C).");

})();

