const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

let block_dimensions = 1;

let x = block_dimensions;
let y = canvas.height - block_dimensions;
let all_nums = [];

function setup() {
    ctx.strokeStyle = '#000';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function make_graph() {
    all_nums = [];
    ctx.fillStyle = "#fff";
    ctx.fillRect(1, 1, canvas.width - 2, canvas.height - 2)
    x = block_dimensions;
    y = canvas.height - block_dimensions;
    get_nums(document.getElementById("initial_num").value);
    draw_bars();
    document.getElementById("outputs").innerHTML = '';
    for (i = 0; i < all_nums.length; i++) {
        document.getElementById("outputs").innerHTML += all_nums[i];
        document.getElementById("outputs").innerHTML += ', ';
    }
}

function increase_size() {
    block_dimensions += 2;
    make_graph();
}

function decrease_size() {
    block_dimensions -= 2;
    make_graph();
}

function drawBlock() {
    ctx.fillStyle = '#333';
    ctx.fillRect(x, y, block_dimensions, block_dimensions);
}

function draw_bars() {
    for (let i = 0; i < all_nums.length; i++) {
        for (let j = 0; j < all_nums[i]; j++) {
            drawBlock();
            y -= block_dimensions;
        }
        y = canvas.height - block_dimensions;
        x += block_dimensions + block_dimensions / 2;
    }
}

function get_nums(num) {
    all_nums.push(num);
    finding_nums = true;
    let current_num = num;
    while (current_num != 1) {
        if (current_num % 2 == 0) {
            current_num = current_num / 2;
            all_nums.push(current_num);
        } else {
            current_num = (current_num * 3 + 1) / 2;
            all_nums.push(current_num);
        } 
    }
}

setup();