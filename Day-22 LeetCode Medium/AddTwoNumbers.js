function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
  
    while (l1 !== null || l2 !== null) {
      let x = l1 !== null ? l1.val : 0;
      let y = l2 !== null ? l2.val : 0;
      let sum = carry + x + y;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
  
      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummyHead.next;
  }
  
  // Test cases
  let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  let result = addTwoNumbers(l1, l2);
  
  while (result !== null) {
    console.log(result.val);
    result = result.next;
  }
  