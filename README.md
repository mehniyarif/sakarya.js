## 0.0.1

#### Converting Case Methods

##### value.toTitleCase()  

  ```
    "bu bir denemedir".toTitleCase()
  ```
  > Output:
  > Bu Bir Denemedir

  - Add Sensitive Character 
    ```
      "bu-bir_denemedir".toTitleCase('-_')
          or
      "bu-bir_denemedir".toTitleCase(['-','_'])
    ```
    > Output:
    > Bu-Bir_Denemedir
  --------------------
##### value.toPascalCase()

  ```
    "bu bir denemedir".toPascalCase()
  ```
  > Output:
  > BuBirDenemedir