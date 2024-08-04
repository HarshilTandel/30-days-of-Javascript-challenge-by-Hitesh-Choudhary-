class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeKLists(lists) {
    if (lists.length === 0) return null;
  
    while (lists.length > 1) {
      let a = lists.shift();
      let b = lists.shift();
      let merged = mergeTwoLists(a, b);
      lists.push(merged);
    }
  
    return lists[0];
  }
  
  function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
  
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    if (l1 !== null) current.next = l1;
    if (l2 !== null) current.next = l2;
  
    return dummy.next;
  }
  
  // Create test case lists and log results
  let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
  let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  let l3 = new ListNode(2, new ListNode(6));
  
  let mergedList = mergeKLists([l1, l2, l3]);
  while (mergedList !== null) {
    console.log(mergedList.val);
    mergedList = mergedList.next;
  }