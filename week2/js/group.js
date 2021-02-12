        function save1(){
            let input_numb = document.querySelector('#input_a').value;
            let result = step2(input_numb*1);
            document.querySelector('#result').innerHTML = result;
        }

        function step2(n){
            let result = 0;
            for(let i = n; i>0; i--){
                result = result + i;
            }
            return result;
        }

        const addfun = function(){
            let input_a = document.querySelector('#input_a').value*1;
            let input_b = document.querySelector('#input_b').value*1;
            document.querySelector('#result').innerHTML = input_a + input_b;
        }

        let save_btn = document.querySelector('#save_btn');
        save_btn.addEventListener('click', save1);

        let add_btn = document.querySelector('#add_btn');
        add_btn.addEventListener('click', addfun);

        document.querySelector('#sub_btn').addEventListener('click', () =>{
            document.querySelector('#result').innerHTML = (document.querySelector('#input_a').value*1) - (document.querySelector('#input_b').value*1);
        });

        document.querySelector('#mul_btn').addEventListener('click', () =>{
            document.querySelector('#result').innerHTML = (document.querySelector('#input_a').value*1) * (document.querySelector('#input_b').value*1);
        });
        document.querySelector('#div_btn').addEventListener('click', () =>{
            document.querySelector('#result').innerHTML = (document.querySelector('#input_a').value*1) / (document.querySelector('#input_b').value*1);
        });