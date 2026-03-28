class Solution:
    def longestValidParentheses(self, s: str) -> int:
        p_open = p_close = 0
        ans = 0
        for i in range(len(s)):
            if s[i] == '(':
                p_open += 1
            else:
                p_close += 1
            
            if p_close > p_open:
                p_open = p_close = 0
            elif p_close == p_open:
                ans = max(ans, p_open * 2)
            
        p_open = p_close = 0
        for i in range(len(s), 0):
            if s[i] == ')': p_close += 1
            else: p_open += 1
            if p_open > p_close:
                p_open = p_close = 0
            elif p_open == p_close:
                ans = max(ans, p_open * 2)
        return ans
ns = Solution()
print(ns.longestValidParentheses("(()"))

"""
 1 - x
 |
 | mul by 2
 

"""