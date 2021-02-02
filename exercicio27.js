// 27) Write a function    
//         function solution (N);
// that prints out ASCII-art in the shape of the capital letter L, made up of copies of the capital letter L. Parameter N is an integer (between 1 and 100) 
// and represents the expected size of ASCII-art (the output should comprise N rows, the last of which should comprise N letters L)
// For example, here is the output for N = 4

// L
// L
// L
// LLLL

// The function should not return any value.
// You can print a string to the output (without or with the end-of-line character) as follows:

// process.stdout.write('sample string')
// process.stdout.write('whole line\n')



const solution = (N) => {
    let lastLine = "L"
    for(let i = 1; i < N; i++){
        lastLine = lastLine + "L"
        process.stdout.write("L\n")
    }
    process.stdout.write(lastLine)
}

solution(5)