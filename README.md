# OVTeleport Foundation

Tài liệu nền tảng về OVTeleport Agent Runtime, được đóng gói dưới dạng MkDocs site để có thể đọc local hoặc deploy lên GitHub Pages.

## Dành Cho Ai

Tài liệu này dành cho developer, product/technical team và người mới biết AI muốn hiểu OVTeleport ở mức nền tảng. Mục tiêu không phải học thuộc thuật ngữ, mà là hiểu vì sao OVTeleport là một agent runtime thay vì chỉ là giao diện chat.

## Học Xong Hiểu Gì

Sau khi học xong, người học cần nắm được:

- OVTeleport là gì và dùng để làm gì.
- Vì sao chatbot trực tiếp không đủ cho task dài, task code, audit hoặc workflow có tool.
- Core flow từ user request đến final response.
- Vai trò của Session / Orchestrator, Agent Loop, Tool calls, Memory / Context và LLM Provider.
- Cách phân biệt chatbot thường với OVTeleport Agent.

## Cấu Trúc

Nội dung chính nằm trong thư mục `src/`:

1. `src/01-ovteleport-overview.md`: định nghĩa OVTeleport và bức tranh tổng quan.
2. `src/02-core-flow.md`: luồng xử lý core từ user request đến final response.
3. `src/03-agent-loop.md`: vòng lặp Plan, Act, Observe, Reflect, Respond.
4. `src/04-tool-calls.md`: cách agent hành động qua tool.
5. `src/05-memory-context.md`: context, working memory, session context và memory.
6. `src/06-llm-provider.md`: vai trò provider abstraction.
7. `src/07-permission-tool-calls.md`: permission boundary cho tool calls.

## Chạy Local

```bash
pip install -r requirements.txt
mkdocs serve
```

Build kiểm tra:

```bash
mkdocs build --strict
```

## Deploy

Repo có sẵn GitHub Actions workflow tại `.github/workflows/deploy.yml` để build MkDocs và deploy lên GitHub Pages khi push vào branch `main`.

## Ghi Chú Trạng Thái

Tài liệu này tập trung vào core runtime đã được mô tả trong tài liệu OVTeleport: session loop, provider call, tool call, permission và context management. Memory dài hạn, Knowledge OS và multi-agent nâng cao được xem là hướng mở rộng hoặc partial nếu chưa có bằng chứng implemented đầy đủ.
