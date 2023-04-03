---
home: false
footer: Made by  with ❤️
---

<!-- markdownlint-disable MD024 MD041 MD043 MD033 -->

<!-- ![Hero image](./images/hero.png) -->

<!-- ![Hero image](/images/hero.png =200x200) -->
<!-- <center> -->
<!--   <img src="/images/hero.png" alt="Hero image" width="200" height="200"> -->
<!-- </center> -->

# <span style="text-align:center;display:block;">《專案指引》</span>

## 簡介

本文件舘，用於彙集本專案之各類文件。

## 主要文件類別

- [使用者需求規格](./d100_URS/)
- [應用系統需求規格](./d200_SRS/)
- [應用系統設計規格](./d300_SDD/)
- [應用系統驗證規格](./d400_DEV/)
- [維運管理及操作手冊](./d500_OP/)
- [文件管理作業指引](./d500_OP/doc_lib)

## Mermaid 支援

### 循序圖

<!-- markdownlint-disable line-length -->
<mermaid/>

```mermaid
sequenceDiagram
  User->>System: Request
  loop trigger event
      System-->>User: Response
  end
```

<!-- markdownlint-enable line-length -->

### 流程圖

<mermaid/>

```mermaid
graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[fa:fa-car Car]
```

## 作業提示

一般作業提示：

::: tip

作業執行時的工作要點、概念解釋，將置於此處說明。

:::

危險作業提示：

::: danger

作業執行將致資料移除、或有可能導致系統當機，以上均屬危險作業
。執行時需小心、再小心。

:::

<style>
.tip {
  background-color: var(--color-tip-bg);
  color: var(--color-tip-text);
  border-color: var(--color-tip-border);
}
.danger {
  background-color: var(--color-danger-bg);
  color: var(--color-danger-text);
  border-color: var(--color-danger-border);
}
</style>
