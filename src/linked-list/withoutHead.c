#include <stdio.h>
#include <stdlib.h>

typedef struct node {
  int value;
  struct node *next;
} Node;

Node *allocate(int value) {
  Node *new = malloc(sizeof(Node));

  new->value = value;
  new->next = NULL;

  return new;
}

void prepend(int value, Node **ref) {
  Node *new = allocate(value);
  new->next = *ref;

  *ref = new;
}

void append(int value, Node **ref) {
  Node *new = allocate(value);
  Node **aux = ref;

  while (*aux)
    aux = &(*aux)->next;
  *aux = new;
}

void drop(int value, Node **ref) {
  // list is empty
  if (!(*ref))
    return;

  Node *trash = *ref;

  /*
    drop(x)
    from: [x|&] -> (...)
    to: (...)
  */
  if ((*ref)->value == value) {
    *ref = (*ref)->next;
    free(trash);
    return;
  }

  Node **behind = ref;
  Node **current = &(*behind)->next;

  /*
    drop(y)
    from: [x|&] -> [y|&] -> [z|&]
    to: [x|&] free([y|&]) [z|&]
           |                /-\
           |_________________|
  */
  while (*current) {
    if ((*current)->value == value) {
      trash = *current;
      (*behind)->next = *current ? (*current)->next : NULL;
      free(trash);
      return;
    }

    behind = current;
    current = &(*current)->next;
  }
}

void clean(Node **ref) {
  while (*ref)
    *ref = (*ref)->next;
}

void show(Node *ref) {
  printf("[\t");

  for (; ref; ref = ref->next)
    printf("%d\t", ref->value);

  printf("]\n");
}

int contains(int value, Node *ref) {
  while (ref) {
    if (ref->value == value)
      return 1;
    ref = ref->next;
  }

  return 0;
}

int size(Node *ref) {
  int items = 0;
  for (; ref; ref = ref->next)
    items++;

  return items;
}

int main() {
  Node *p_list1 = NULL;
  Node *p_list2 = NULL;

  int nums[] = {0, 1, 2, 3};

  for (int i = 0; i < 4; i++)
    prepend(nums[i], &p_list1);

  for (int i = 0; i < 4; i++)
    append(nums[i] * 2, &p_list2);

  show(p_list1); // [3, 2, 1, 0]
  show(p_list2); // [0, 2, 4, 6]

  size(p_list1); // 4
  size(p_list2); // 4

  contains(1, p_list1); // true
  drop(1, &p_list1);    // [3, 2, X, 0]
  contains(1, p_list1); // false
  size(p_list1);        // 3

  clean(&p_list1); // []
  clean(&p_list2); // []

  show(p_list1);
  return 0;
}
