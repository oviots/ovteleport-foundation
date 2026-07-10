# OVTeleport Foundation

Tài liệu này giúp người đọc hiểu OVTeleport ở mức nền tảng: vì sao nó là một **AI Agent Runtime** thay vì chỉ là một giao diện chat.

## Dành cho ai

- Developer muốn hiểu agent runtime, tool calls và context management.
- Product/technical team cần nắm kiến trúc agent ở mức dễ trao đổi.
- Người mới biết AI muốn phân biệt chatbot thường với AI agent có runtime.

## Học xong hiểu gì

Sau khi học xong, người học cần nắm được:

- OVTeleport là gì và dùng để làm gì.
- Vì sao chatbot trực tiếp không đủ cho task dài, task code, audit hoặc workflow có tool.
- Core flow từ user request đến final response.
- Vai trò của Session / Orchestrator, Agent Loop, Tool calls, Memory / Context và LLM Provider.
- Permission boundary giúp agent hành động trong workspace thật một cách có kiểm soát.

## Cấu trúc nội dung

1. [OVTeleport là gì?](01-ovteleport-overview.md)
2. [Core Flow](02-core-flow.md)
3. [Agent Loop](03-agent-loop.md)
4. [Tool Calls](04-tool-calls.md)
5. [Memory / Context](05-memory-context.md)
6. [LLM Provider](06-llm-provider.md)
7. [Permission & Tool Calls](07-permission-tool-calls.md)

## Thứ tự đọc đề xuất

Đọc theo thứ tự từ phần 1 đến phần 7. Nội dung được thiết kế theo mạch:

```text
Tổng quan -> Core Flow -> Agent Loop -> Tool Calls
-> Memory / Context -> LLM Provider -> Permission
```
