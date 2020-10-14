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

void prepend(int value, Node *ref) {
  Node *new = allocate(value);

  new->next = ref->next;
  ref->next = new;
}

void clean(Node *ref) {
  if (ref->next) {
    Node *trash, *aux = ref->next;
    while (aux) {
      trash = aux;
      aux = aux->next;

      free(trash);
    }
  }
}

void show(Node *ref) {
  printf("[\t");

  if (ref->next) {
    for (Node *p = ref->next; p; p = p->next)
      printf("%d\t", p->value);
  }

  printf("\t]\n");
}

int main() {
  Node *p_list1 = malloc(sizeof(Node));
  p_list1->next = NULL;

  prepend(1, p_list1);
  prepend(2, p_list1);
  prepend(3, p_list1);
  clean(p_list1);
  show(p_list1);

  return 0;
}
