var iterativePreOrder = function (node) {
    if (node == null) {
      return;
    }
    let stack = [];
    stack.push(node);
    while (stack.length > 0) {
      let pop_node = stack.pop();
      console.log(pop_node.val);
      if (pop_node.right) stack.push(pop_node.right);
      if (pop_node.left) stack.push(pop_node.left);
    }
  };

  var iterativeInOrder = function (node) {
    if (node == null) {
      return;
    }
    let crnt_node = node;
    let stack = [];
    while (true) {
      if (crnt_node != null) {
        stack.push(crnt_node);
        crnt_node = crnt_node.left;
      } else if (stack.length > 0) {
        crnt_node = stack.pop();
        console.log(crnt_node.val);
        crnt_node = crnt_node.right;
      } else {
        break;
      }
    }
  };

  var iterativePostOrder = function (node) {
    if (node == null) {
      return;
    }
    let crnt_node = node;
    let stack = [];
    let last_visit_node = null;
    while (true) {
      if (crnt_node != null) {
        stack.push(crnt_node);
        crnt_node = crnt_node.left;
      } else if (stack.length > 0) {
        peek_node = stack[stack.length - 1];
        if (peek_node.right != null && last_visit_node != peek_node.right) {
          crnt_node = peek_node.right;
        } else {
          console.log(peek_node.val);
          last_visit_node = stack.pop();
        }
      } else {
        break;
      }
    }
  };
  
  // 출 처 https://doheelab.github.io/algorithm/binary_tree/