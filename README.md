# Payhere 기업 과제

README에 프로젝트 설정 및 실행 방법에 대해서 작성합니다.
```
npm install
npm start
```

# 과제 소개

```
고객은 내가 자주 가는 GitHub의 Public Repository의 Issue들을 모아서 보고 싶다.
찾아보니 GitHub에서 Open API를 제공하기 때문에, 이를 활용해서 개발할 수 있다.
자세한 요구사항은 다음과 같다.
```

**GitHub API : [https://docs.github.com/en/rest](https://docs.github.com/en/rest)**

# 권장 사용 언어 및 라이브러리

1. 웹은 **React.js** 앱은 React-Native를 사용하여 개발하는 것을 권장합니다.
2. 패키지 매니저 도구로 npm 을 사용합니다.
3. 디자인은 직접 혹은 디자인 UI 컴포넌트 라이브러리를 활용합니다.
4. React-Native는 Expo보다는 React-Native Cli 사용을 권장합니다.

### 요구사항

1. 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다.
2. 검색된 Public Repository를 등록할 수 있다.
   - 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려준다.
   - **웹은 LocalStorage**, 앱은 Async Storage 등 로컬 저장소를 활용한다. (웹 혹은 앱 선택)
3. 등록된 Repository를 삭제할 수 있다.
4. 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
   - 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다.
   - 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다.
   - 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.

# 구현

- GitHub API는 **REST API** 혹은 GraphQL API 어떤 것을 써도 무방합니다.
- 별도의 요구사항이 없는 것은 지원자가 판단해서 개발합니다.
