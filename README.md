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
  - Support Characters
    - " " => space
    - "-" => hyphen
    - "_" => underscore
  ```
    "bu bir denemedir".toPascalCase()
  ```
  > Output:
  > BuBirDenemedir

  - Add Sensitive Character 
    ```
      "bu-bir_denemedir".toPascalCase('-_')
          or
      "bu-bir_denemedir".toPascalCase(['-','_'])
    ```
    > Output:
    > BuBirDenemedir